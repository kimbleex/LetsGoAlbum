#!/usr/bin/env node

/**
 * 图片优化脚本
 * 用于批量处理 public/images 目录下的图片
 * 
 * 使用方法：
 * 1. 安装依赖：npm install sharp
 * 2. 运行脚本：node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✅ 创建输出目录: ${outputDir}`);
}

// 支持的图片格式
const supportedFormats = /\.(jpg|jpeg|png|webp)$/i;

// 处理单个图片
async function optimizeImage(inputPath, outputPath) {
  try {
    const outputDirPath = path.dirname(outputPath);
    
    // 确保输出目录存在
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }
    
    // 获取文件扩展名
    const ext = path.extname(inputPath).toLowerCase();
    
    // 根据文件类型选择优化策略
    if (ext === '.webp') {
      // WebP 文件直接复制
      fs.copyFileSync(inputPath, outputPath);
      console.log(`📋 复制: ${path.basename(inputPath)}`);
    } else {
      // 其他格式转换为 WebP
      const webpPath = outputPath.replace(/\.[^.]+$/, '.webp');
      
      await sharp(inputPath)
        .resize(1200, 800, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 80,
          effort: 6
        })
        .toFile(webpPath);
      
      console.log(`✅ 优化: ${path.basename(inputPath)} → ${path.basename(webpPath)}`);
    }
  } catch (error) {
    console.error(`❌ 处理失败: ${path.basename(inputPath)}`, error.message);
  }
}

// 递归处理目录
async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 递归处理子目录
      await processDirectory(filePath);
    } else if (supportedFormats.test(file)) {
      // 处理图片文件
      const relativePath = path.relative(inputDir, filePath);
      const outputPath = path.join(outputDir, relativePath);
      await optimizeImage(filePath, outputPath);
    }
  }
}

// 主函数
async function main() {
  console.log('🚀 开始图片优化...\n');
  
  if (!fs.existsSync(inputDir)) {
    console.error(`❌ 输入目录不存在: ${inputDir}`);
    console.log('请确保 public/images 目录存在并包含图片文件');
    process.exit(1);
  }
  
  try {
    await processDirectory(inputDir);
    console.log('\n🎉 图片优化完成！');
    console.log(`📁 优化后的图片保存在: ${outputDir}`);
    console.log('\n💡 提示：');
    console.log('1. 检查优化后的图片质量');
    console.log('2. 将优化后的图片路径更新到相册数据中');
    console.log('3. 删除原始图片以节省空间（可选）');
  } catch (error) {
    console.error('❌ 优化过程中出现错误:', error);
    process.exit(1);
  }
}

// 检查是否安装了 sharp
try {
  require.resolve('sharp');
} catch (error) {
  console.error('❌ 缺少依赖: sharp');
  console.log('请运行以下命令安装:');
  console.log('npm install sharp');
  process.exit(1);
}

// 运行主函数
main(); 