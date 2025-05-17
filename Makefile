# Frontend commands
install-frontend:
	cd frontend && npm install
	cd frontend && npm install axios @radix-ui/react-separator embla-carousel-react

build-frontend:
	cd frontend && npm run build

dev-frontend:
	cd frontend && npm run dev

# Backend commands
install-backend:
	cd backend && pip install -r requirements.txt

dev-backend:
	cd backend && uvicorn main:app --reload

# Combined commands
install: install-frontend install-backend

dev: dev-backend dev-frontend

build: build-frontend

# Clean commands
clean:
	rm -rf frontend/node_modules
	rm -rf frontend/dist
	find . -type d -name "__pycache__" -exec rm -r {} +

# Default target
.DEFAULT_GOAL := install
