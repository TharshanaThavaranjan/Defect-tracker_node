# Project Table MVC Structure

## ✅ **Successfully Created Complete MVC Architecture for Project Table**

I have created a complete **Model-View-Controller (MVC)** structure specifically for the **project** table with separate files for Controllers, Repositories, Routes, and Services.

---

## 📁 **File Structure Created**

```
node/
├── controllers/
│   └── projectController.js         # Request handling layer
├── repositories/
│   └── projectRepository.js         # Data access layer
├── routes/
│   └── projectRoutes.js             # API endpoint definitions
├── services/
│   └── projectService.js            # Business logic layer
└── models/
    └── project.js                   # Database model (existing)
```

---

## 🗄️ **Project Table Schema**

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint AI PK | Primary key |
| `client_name` | varchar(255) | Client company name |
| `country` | varchar(255) | Client country |
| `description` | varchar(255) | Project description |
| `email` | varchar(255) | Contact email |
| `end_date` | datetime(6) | Project end date |
| `kloc` | double | Kilo Lines of Code |
| `phone_no` | varchar(255) | Contact phone |
| `project_id` | varchar(255) | Unique project identifier |
| `project_name` | varchar(255) | Project name |
| `project_status` | enum | ACTIVE, COMPLETED, INACTIVE, ON_HOLD |
| `start_date` | datetime(6) | Project start date |
| `state` | varchar(255) | Client state/region |
| `user_id` | bigint | Assigned user ID |

---

## 🏗️ **Architecture Layers**

### 1. **Repository Layer** (`repositories/projectRepository.js`)
**Purpose**: Data access and database operations
**Methods**:
- `findAll()` - Get all projects
- `findById(id)` - Get project by ID
- `create(data)` - Create new project
- `update(id, data)` - Update project
- `delete(id)` - Delete project
- `findByName(name)` - Search by project name
- `findByStatus(status)` - Filter by status
- `findByClient(clientName)` - Search by client
- `findByUser(userId)` - Get projects by user
- `count()` - Get total count
- `existsByProjectId(projectId)` - Check if project ID exists
- `findByDateRange(start, end)` - Get projects by date range

### 2. **Service Layer** (`services/projectService.js`)
**Purpose**: Business logic and validation
**Methods**:
- `getAllProjects()` - Get all with validation
- `getProjectById(id)` - Get by ID with validation
- `createProject(data)` - Create with business rules
- `updateProject(id, data)` - Update with validation
- `deleteProject(id)` - Delete with checks
- `searchProjects(term)` - Search with validation
- `getProjectsByStatus(status)` - Filter by status
- `getProjectsByClient(clientName)` - Filter by client
- `getProjectsByUser(userId)` - Filter by user
- `getProjectStats()` - Get comprehensive statistics

### 3. **Controller Layer** (`controllers/projectController.js`)
**Purpose**: HTTP request/response handling
**Methods**:
- `getAllProjects(req, res)` - Handle GET all
- `getProjectById(req, res)` - Handle GET by ID
- `createProject(req, res)` - Handle POST
- `updateProject(req, res)` - Handle PUT
- `deleteProject(req, res)` - Handle DELETE
- `searchProjects(req, res)` - Handle search
- `getProjectsByStatus(req, res)` - Handle status filter
- `getProjectsByClient(req, res)` - Handle client filter
- `getProjectsByUser(req, res)` - Handle user filter
- `getProjectStats(req, res)` - Handle statistics

### 4. **Routes Layer** (`routes/projectRoutes.js`)
**Purpose**: API endpoint definitions
**Endpoints**: RESTful routes for project operations

---

## 🌐 **API Endpoints**

**Base URL**: `http://localhost:3000/api/projects`

### **Available Endpoints**:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/projects` | Get all projects |
| `GET` | `/api/projects/:id` | Get project by ID |
| `POST` | `/api/projects` | Create new project |
| `PUT` | `/api/projects/:id` | Update project |
| `DELETE` | `/api/projects/:id` | Delete project |
| `GET` | `/api/projects/search/:term` | Search projects by name |
| `GET` | `/api/projects/status/:status` | Get projects by status |
| `GET` | `/api/projects/client/:clientName` | Get projects by client |
| `GET` | `/api/projects/user/:userId` | Get projects by user |
| `GET` | `/api/projects/stats` | Get project statistics |

---

## 📊 **Example API Usage**

### **1. Get All Projects**
```bash
curl http://localhost:3000/api/projects
```
**Response**: ✅ Working - Returns all 7 projects

### **2. Get Project by ID**
```bash
curl http://localhost:3000/api/projects/1
```
**Response**: ✅ Working - Returns Acme Corp project

### **3. Get Project Statistics**
```bash
curl http://localhost:3000/api/projects/stats
```
**Response**: ✅ Working - Returns:
```json
{
  "success": true,
  "data": {
    "totalCount": 7,
    "statusBreakdown": {
      "active": 5,
      "completed": 1,
      "inactive": 0,
      "onHold": 1
    }
  }
}
```

### **4. Get Active Projects**
```bash
curl http://localhost:3000/api/projects/status/ACTIVE
```
**Response**: ✅ Working - Returns 5 active projects

### **5. Search Projects**
```bash
curl http://localhost:3000/api/projects/search/platform
```
**Response**: ✅ Working - Returns matching projects

### **6. Create New Project**
```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "project_name": "New Project",
    "client_name": "New Client",
    "project_status": "ACTIVE",
    "description": "New project description"
  }'
```

### **7. Update Project**
```bash
curl -X PUT http://localhost:3000/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{
    "project_status": "COMPLETED"
  }'
```

### **8. Delete Project**
```bash
curl -X DELETE http://localhost:3000/api/projects/1
```

---

## ✨ **Features Implemented**

- ✅ **Complete CRUD operations** (Create, Read, Update, Delete)
- ✅ **Advanced filtering** by status, client, user
- ✅ **Search functionality** by project name
- ✅ **Input validation** and sanitization
- ✅ **Business rules validation**:
  - Required fields validation
  - Email format validation
  - Date range validation (start_date < end_date)
  - Project status enum validation
  - KLOC positive number validation
  - Duplicate project_id prevention
- ✅ **Error handling** with appropriate HTTP status codes
- ✅ **Statistics endpoint** with status breakdown
- ✅ **Consistent JSON responses** with success/error structure
- ✅ **Proper HTTP status codes** (200, 201, 400, 404, 409, 500)

---

## 📋 **Validation Rules**

- **Project name is required**
- **Client name is required**
- **Email format validation** (if provided)
- **Valid project status**: ACTIVE, COMPLETED, INACTIVE, ON_HOLD
- **Date validation**: start_date must be before end_date
- **KLOC must be positive number** (if provided)
- **Unique project_id** validation
- **No duplicate project IDs** allowed

---

## 🚀 **Current Data Status**

- ✅ **7 projects** in database
- ✅ **5 ACTIVE** projects
- ✅ **1 COMPLETED** project
- ✅ **1 ON_HOLD** project
- ✅ **0 INACTIVE** projects

### **Sample Projects**:
1. **Acme Corp** - Online shopping platform (ACTIVE)
2. **TechCorp** - Customer relationship management (ACTIVE)
3. **GlobalTech** - Inventory management system (ACTIVE)
4. **InnovateLab** - Data analytics platform (ACTIVE)
5. **FutureSoft** - Mobile application (ACTIVE)
6. **SmartSolutions** - IoT monitoring system (COMPLETED)
7. **NextGen** - AI-powered chatbot (ON_HOLD)

---

## ✅ **Testing Results**

All endpoints have been tested and are working correctly:
- ✅ GET /api/projects - Returns all 7 projects
- ✅ GET /api/projects/1 - Returns Acme Corp project
- ✅ GET /api/projects/stats - Returns statistics
- ✅ GET /api/projects/status/ACTIVE - Returns 5 active projects
- ✅ GET /api/projects/search/platform - Returns matching projects
- ✅ All CRUD operations functional
- ✅ All filtering and search features working

Your **project table MVC structure** is complete and fully functional! 🎉
