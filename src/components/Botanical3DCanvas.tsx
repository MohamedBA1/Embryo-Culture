import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface Botanical3DCanvasProps {
  lang: Language;
  className?: string;
}

export const Botanical3DCanvas: React.FC<Botanical3DCanvasProps> = ({
  lang,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Growth stage: 0 = Seed embryo, 1 = Germination, 2 = In vitro sprout, 3 = Mature plantlet
  const [growthStage, setGrowthStage] = useState<number>(2);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Growth stages text
  const stageLabels = [
    { en: 'Embryo Seed', ar: 'جنين البذرة' },
    { en: 'Early Sprout', ar: 'بدء الإنبات' },
    { en: 'In Vitro Plant', ar: 'نبات مخبري' },
    { en: 'Acclimatized', ar: 'شتلة مؤقلمة' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    // Mouse coordinates for 3D tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 2;
      targetMouseY = y * 2;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Set canvas dimensions with high-DPI
    const resize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Floating particles (nutrients and spores)
    interface Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * 500 - 250,
      y: Math.random() * 500 - 200,
      z: Math.random() * 300 + 50,
      size: Math.random() * 2.5 + 1.2,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? '#358245' : '#73C787',
    }));

    // Floating seeds / small leaves drifting
    interface FloatingLeaf {
      x: number;
      y: number;
      z: number;
      rot: number;
      rotSpeed: number;
      scale: number;
      driftSpeed: number;
    }

    const floatingLeaves: FloatingLeaf[] = Array.from({ length: 5 }, () => ({
      x: (Math.random() - 0.5) * 360,
      y: (Math.random() - 0.5) * 300 - 50,
      z: Math.random() * 200 + 50,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      scale: Math.random() * 0.4 + 0.6,
      driftSpeed: Math.random() * 0.25 + 0.15,
    }));

    let currentGrowth = growthStage;

    // Render loop
    const render = () => {
      time += 0.02;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Smooth growth transition
      currentGrowth += (growthStage - currentGrowth) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height * 0.58;

      ctx.save();
      // Apply 3D perspective tilt
      ctx.translate(centerX + mouseX * 25, centerY + mouseY * 15);

      // 1. Draw glowing ambient aura behind plant
      const auraGradient = ctx.createRadialGradient(0, -60, 20, 0, -60, 240);
      auraGradient.addColorStop(0, 'rgba(53, 130, 69, 0.18)');
      auraGradient.addColorStop(0.5, 'rgba(21, 60, 60, 0.08)');
      auraGradient.addColorStop(1, 'rgba(21, 60, 60, 0)');
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(0, -60, 240, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Soil / Agar Substrate layer (In Vitro Glass Jar / Soil Pod)
      const groundY = 80;
      const podWidth = 220;
      const podHeight = 110;

      // Substrate Glow / Nutrient Base
      const substrateGrad = ctx.createLinearGradient(0, groundY - 10, 0, groundY + podHeight);
      substrateGrad.addColorStop(0, '#1E4733');
      substrateGrad.addColorStop(0.2, '#153C3C');
      substrateGrad.addColorStop(1, '#0C2020');

      ctx.save();
      // Terraced Pot Silhouette (Homage to Embryo Culture Logo Base)
      ctx.beginPath();
      ctx.moveTo(-podWidth * 0.48, groundY);
      ctx.lineTo(podWidth * 0.48, groundY);
      ctx.lineTo(podWidth * 0.42, groundY + 28);
      ctx.lineTo(podWidth * 0.38, groundY + 28);
      ctx.lineTo(podWidth * 0.32, groundY + 68);
      ctx.lineTo(-podWidth * 0.32, groundY + 68);
      ctx.lineTo(-podWidth * 0.38, groundY + 28);
      ctx.lineTo(-podWidth * 0.42, groundY + 28);
      ctx.closePath();
      ctx.fillStyle = substrateGrad;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(53, 130, 69, 0.4)';
      ctx.stroke();

      // Top rim of culture vessel / soil
      ctx.beginPath();
      ctx.ellipse(0, groundY, podWidth * 0.48, 14, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#2A5C41';
      ctx.fill();
      ctx.strokeStyle = '#3E9B54';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // 3. Subsurface Root System with pulsing nutrient energy
      const drawRoot = (
        startX: number,
        startY: number,
        segments: { x: number; y: number }[],
        pulseOffset: number
      ) => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        let currX = startX;
        let currY = startY;

        for (let i = 0; i < segments.length; i++) {
          const seg = segments[i];
          const sway = Math.sin(time * 1.5 + i + pulseOffset) * 1.5;
          currX += seg.x + sway;
          currY += seg.y;
          ctx.lineTo(currX, currY);
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Pulsing bioluminescent nutrient flow dots along roots
        const pulseProgress = (time * 0.6 + pulseOffset) % 1;
        const targetIdx = Math.floor(pulseProgress * segments.length);
        if (targetIdx < segments.length) {
          ctx.beginPath();
          ctx.arc(
            startX + segments.slice(0, targetIdx + 1).reduce((acc, s) => acc + s.x, 0),
            startY + segments.slice(0, targetIdx + 1).reduce((acc, s) => acc + s.y, 0),
            2.2,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = '#A3E8B5';
          ctx.shadowColor = '#52C778';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      };

      // Draw branching roots if growth >= 1
      if (currentGrowth > 0.5) {
        ctx.save();
        // Central tap root
        drawRoot(0, groundY + 4, [{ x: -2, y: 12 }, { x: 3, y: 16 }, { x: -1, y: 18 }, { x: 2, y: 14 }], 0);
        // Left lateral roots
        drawRoot(-12, groundY + 6, [{ x: -14, y: 10 }, { x: -16, y: 14 }, { x: -10, y: 16 }], 1.2);
        drawRoot(-8, groundY + 8, [{ x: -8, y: 14 }, { x: -12, y: 18 }], 2.5);
        // Right lateral roots
        drawRoot(12, groundY + 6, [{ x: 14, y: 10 }, { x: 16, y: 14 }, { x: 8, y: 16 }], 0.8);
        drawRoot(6, groundY + 8, [{ x: 10, y: 14 }, { x: 14, y: 18 }], 3.1);
        ctx.restore();
      }
      ctx.restore();

      // 4. Plant Stem & Sprout
      ctx.save();
      const stemHeight = 60 + currentGrowth * 70; // 60px -> 270px
      const stemSway = Math.sin(time) * 4 + mouseX * 8;
      const stemBaseX = 0;
      const stemBaseY = groundY - 2;

      // Stem curve control points
      const ctrl1X = stemSway * 0.3;
      const ctrl1Y = stemBaseY - stemHeight * 0.4;
      const ctrl2X = -stemSway * 0.2;
      const ctrl2Y = stemBaseY - stemHeight * 0.7;
      const tipX = stemSway;
      const tipY = stemBaseY - stemHeight;

      // Stem gradient
      const stemGradient = ctx.createLinearGradient(0, stemBaseY, tipX, tipY);
      stemGradient.addColorStop(0, '#153C3C');
      stemGradient.addColorStop(0.5, '#26643C');
      stemGradient.addColorStop(1, '#3E9B54');

      ctx.beginPath();
      ctx.moveTo(stemBaseX - 3.5, stemBaseY);
      ctx.bezierCurveTo(ctrl1X - 3, ctrl1Y, ctrl2X - 2.5, ctrl2Y, tipX, tipY);
      ctx.bezierCurveTo(ctrl2X + 2.5, ctrl2Y, ctrl1X + 3, ctrl1Y, stemBaseX + 3.5, stemBaseY);
      ctx.closePath();
      ctx.fillStyle = stemGradient;
      ctx.fill();

      // Delicate embryonic apex bud
      ctx.beginPath();
      ctx.arc(tipX, tipY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#65D686';
      ctx.shadowColor = '#358245';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Function to render 3D shaded botanical leaf
      const drawLeaf = (
        attachX: number,
        attachY: number,
        angleDeg: number,
        length: number,
        widthScale: number,
        flutterOffset: number
      ) => {
        ctx.save();
        ctx.translate(attachX, attachY);
        const rad = (angleDeg * Math.PI) / 180;
        const flutter = Math.sin(time * 2 + flutterOffset) * 0.08;
        ctx.rotate(rad + flutter + mouseX * 0.05);

        const leafLength = length * (0.4 + currentGrowth * 0.25);
        const leafWidth = leafLength * widthScale;

        // Leaf outline
        ctx.beginPath();
        ctx.moveTo(0, 0);
        // Left half of leaf
        ctx.bezierCurveTo(-leafWidth * 0.7, -leafLength * 0.35, -leafWidth * 0.9, -leafLength * 0.75, 0, -leafLength);
        // Right half of leaf
        ctx.bezierCurveTo(leafWidth * 0.9, -leafLength * 0.75, leafWidth * 0.7, -leafLength * 0.35, 0, 0);
        ctx.closePath();

        // 3D Lighting gradient across leaf
        const leafGrad = ctx.createLinearGradient(-leafWidth, 0, leafWidth, -leafLength);
        leafGrad.addColorStop(0, '#153C3C');
        leafGrad.addColorStop(0.35, '#2D7541');
        leafGrad.addColorStop(0.7, '#3E9B54');
        leafGrad.addColorStop(1, '#7CE297');

        ctx.fillStyle = leafGrad;
        ctx.shadowColor = 'rgba(21, 60, 60, 0.25)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Central leaf vein
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(leafWidth * 0.08, -leafLength * 0.5, 0, -leafLength);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.restore();
      };

      // Leaves matching the exact Embryo Culture logo layout!
      // Leaf 1: Lower-left
      if (currentGrowth > 0.4) {
        const attachY1 = stemBaseY - stemHeight * 0.4;
        const attachX1 = ctrl1X - 2;
        drawLeaf(attachX1, attachY1, -55, 75, 0.48, 0);
      }

      // Leaf 2: Upper-right
      if (currentGrowth > 0.8) {
        const attachY2 = stemBaseY - stemHeight * 0.72;
        const attachX2 = ctrl2X + 2;
        drawLeaf(attachX2, attachY2, 45, 68, 0.42, 1.5);
      }

      // Leaf 3: Lower-right
      if (currentGrowth > 1.2) {
        const attachY3 = stemBaseY - stemHeight * 0.45;
        const attachX3 = ctrl1X + 2;
        drawLeaf(attachX3, attachY3, 72, 60, 0.44, 3.2);
      }

      // Leaf 4 (additional mature foliage for high stage)
      if (currentGrowth > 2.0) {
        drawLeaf(tipX - 1, tipY + 12, -30, 52, 0.38, 4.1);
        drawLeaf(tipX + 1, tipY + 18, 30, 48, 0.36, 2.7);
      }

      ctx.restore();

      // 5. Draw floating nutrient particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        // Reset if floated out of frame
        if (p.y < -260) {
          p.y = 100;
          p.x = (Math.random() - 0.5) * 360;
        }

        const scale = 200 / (200 + p.z);
        const screenX = p.x * scale;
        const screenY = p.y * scale;

        ctx.beginPath();
        ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * scale;
        ctx.shadowColor = '#65D686';
        ctx.shadowBlur = 6 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // 6. Draw floating seed / leaf elements with 3D rotation
      floatingLeaves.forEach((fl) => {
        fl.y += fl.driftSpeed;
        fl.rot += fl.rotSpeed;

        if (fl.y > 180) {
          fl.y = -220;
          fl.x = (Math.random() - 0.5) * 320;
        }

        ctx.save();
        ctx.translate(fl.x + mouseX * 12, fl.y + mouseY * 8);
        ctx.rotate(fl.rot);
        ctx.scale(fl.scale, fl.scale);

        // Stylized embryo seed capsule with wing
        ctx.beginPath();
        ctx.ellipse(0, 0, 7, 14, 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(53, 130, 69, 0.65)';
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(3, -10, 5, 12, 0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(21, 60, 60, 0.45)';
        ctx.fill();

        ctx.restore();
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [growthStage]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square max-w-[540px] mx-auto rounded-3xl p-4 flex flex-col items-center justify-between select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glass container with organic subtle border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#153C3C]/10 via-[#153C3C]/5 to-[#358245]/10 border border-[#153C3C]/15 backdrop-blur-md shadow-2xl shadow-[#153C3C]/10 -z-10 overflow-hidden">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#358245_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      {/* Top Header Badge */}
      <div className="w-full flex items-center justify-between px-2 pt-1 text-xs text-[#153C3C] z-10">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#358245] animate-pulse" />
          <span className="font-semibold tracking-wide">
            {lang === 'ar' ? 'محاكاة الأجنة الحيوية 3D' : 'In Vitro Embryo Model'}
          </span>
        </div>
        <div className="text-[11px] text-[#40625E] font-mono tabular-nums">
          {lang === 'ar' ? 'حيوية الأنسجة: 99.4%' : 'Cell Viability: 99.4%'}
        </div>
      </div>

      {/* Main Canvas rendering */}
      <canvas
        ref={canvasRef}
        className="w-full h-full max-h-[380px] cursor-grab active:cursor-grabbing"
      />

      {/* Interactive Growth Stage Controller */}
      <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl p-2.5 border border-[#153C3C]/10 shadow-sm z-10">
        <div className="flex items-center justify-between text-[11px] text-[#40625E] mb-1.5 px-1 font-medium">
          <span>{lang === 'ar' ? 'المرحلة البيولوجية:' : 'Growth Stage:'}</span>
          <span className="font-semibold text-[#153C3C]">
            {stageLabels[growthStage][lang]}
          </span>
        </div>

        {/* 4 Stage Pills */}
        <div className="grid grid-cols-4 gap-1.5">
          {stageLabels.map((stage, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setGrowthStage(idx)}
              className={`py-1.5 px-1 rounded-xl text-[10px] font-semibold transition-all duration-200 cursor-pointer ${
                growthStage === idx
                  ? 'bg-[#153C3C] text-white shadow-sm'
                  : 'bg-[#F2F7F4] text-[#40625E] hover:bg-[#E5EFE8] hover:text-[#153C3C]'
              }`}
            >
              {stage[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
