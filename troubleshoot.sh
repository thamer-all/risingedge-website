#!/bin/bash

# Rising Edge Website Troubleshooting Script
echo "🔧 Rising Edge Website Troubleshooting"
echo "======================================"

# Check if Node.js is installed
echo "📋 Checking Node.js..."
if command -v node &> /dev/null; then
    echo "✅ Node.js version: $(node --version)"
else
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
echo "📋 Checking npm..."
if command -v npm &> /dev/null; then
    echo "✅ npm version: $(npm --version)"
else
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

# Check if dependencies are installed
echo "📋 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "⚠️  Dependencies not found. Installing..."
    npm install --legacy-peer-deps
fi

# Check for running processes
echo "📋 Checking for running processes..."
if pgrep -f "vite" > /dev/null; then
    echo "⚠️  Vite process found. PID: $(pgrep -f vite)"
    echo "   To kill: pkill -f vite"
else
    echo "✅ No Vite processes running"
fi

# Check port usage
echo "📋 Checking port usage..."
for port in 3000 3001 5173; do
    if lsof -i :$port >/dev/null 2>&1; then
        echo "⚠️  Port $port is in use by: $(lsof -i :$port | tail -1)"
    else
        echo "✅ Port $port is available"
    fi
done

echo ""
echo "🚀 To start the development server:"
echo "   npm run dev:clean"
echo ""
echo "🌐 Website will be available at: http://localhost:3001" 