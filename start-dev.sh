#!/bin/bash

# Rising Edge Website Development Server Startup Script
# This script ensures the development server starts reliably and handles port conflicts

echo "🚀 Starting Rising Edge Website Development Server..."

# Kill any existing Vite processes
echo "🔄 Cleaning up existing processes..."
pkill -f "vite\|node.*dev" 2>/dev/null || true

# Wait a moment for processes to fully terminate
sleep 2

# Check if ports are available
check_port() {
    local port=$1
    if lsof -i :$port >/dev/null 2>&1; then
        echo "⚠️  Port $port is in use. Attempting to free it..."
        lsof -ti :$port | xargs kill -9 2>/dev/null || true
        sleep 1
    fi
}

# Check common development ports
check_port 3000
check_port 3001
check_port 5173

echo "✅ Starting development server on port 3001..."

# Start the development server with explicit configuration
npm run dev -- --port 3001 --host 0.0.0.0 --open

echo "🎉 Development server started successfully!"
echo "🌐 Access your website at: http://localhost:3001"
echo "📱 Network access: http://$(hostname -I | awk '{print $1}'):3001" 