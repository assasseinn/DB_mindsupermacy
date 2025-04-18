import React, { useEffect, useRef } from "react";

export default function SacredGeometryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Animation variables
    let animationFrameId: number;
    let rotation = 0;
    
    // Draw neural network with sacred geometry patterns
    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0D0F18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw geometric pattern
      drawSacredGeometry(ctx, canvas.width / 2, canvas.height / 2, rotation);
      
      // Draw neural network nodes and connections
      drawNeuralNetwork(ctx, canvas.width, canvas.height);

      // Update rotation for animation
      rotation += 0.001;
      animationFrameId = requestAnimationFrame(drawBackground);
    }

    // Set canvas dimensions to window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ opacity: 0.6 }}
    />
  );
}

// Function to draw sacred geometry patterns
function drawSacredGeometry(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, rotation: number) {
  const maxRadius = Math.min(centerX, centerY) * 0.8;
  
  // Draw Flower of Life pattern
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(rotation);
  
  // Draw multiple circles in sacred geometry pattern
  const circleCount = 6;
  const radius = maxRadius / 3;
  
  ctx.strokeStyle = "rgba(179, 141, 77, 0.15)"; // Gold with transparency
  ctx.lineWidth = 1;
  
  // Center circle
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.stroke();
  
  // Surrounding circles
  for (let i = 0; i < circleCount; i++) {
    const angle = (i / circleCount) * Math.PI * 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Draw metatron's cube lines
  ctx.strokeStyle = "rgba(80, 56, 206, 0.1)"; // Purple with transparency
  ctx.beginPath();
  for (let i = 0; i < circleCount; i++) {
    const angle1 = (i / circleCount) * Math.PI * 2;
    const x1 = radius * Math.cos(angle1);
    const y1 = radius * Math.sin(angle1);
    
    for (let j = i + 1; j < circleCount; j++) {
      const angle2 = (j / circleCount) * Math.PI * 2;
      const x2 = radius * Math.cos(angle2);
      const y2 = radius * Math.sin(angle2);
      
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
    }
  }
  ctx.stroke();
  
  // Outer mandala pattern
  ctx.strokeStyle = "rgba(179, 141, 77, 0.1)";
  ctx.beginPath();
  ctx.arc(0, 0, maxRadius * 0.9, 0, Math.PI * 2);
  ctx.stroke();
  
  const petalCount = 12;
  for (let i = 0; i < petalCount; i++) {
    const angle = (i / petalCount) * Math.PI * 2;
    const x = maxRadius * 0.75 * Math.cos(angle);
    const y = maxRadius * 0.75 * Math.sin(angle);
    
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  
  ctx.restore();
}

// Function to draw neural network visualization
function drawNeuralNetwork(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const nodes: {x: number, y: number, size: number}[] = [];
  const nodeCount = 30;
  
  // Create random nodes
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1
    });
  }
  
  // Draw connections between nodes
  ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
  ctx.lineWidth = 0.5;
  
  for (let i = 0; i < nodes.length; i++) {
    const node1 = nodes[i];
    
    for (let j = i + 1; j < nodes.length; j++) {
      const node2 = nodes[j];
      const distance = Math.sqrt(
        Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
      );
      
      // Only connect nearby nodes
      if (distance < 200) {
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
      }
    }
  }
  
  // Draw nodes
  for (const node of nodes) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
    ctx.fill();
  }
}