# Inclusive.AI - Simplify Event Planning with Google Gemini

**Inclusive.AI** - A project developed for the Google Gemini API Hackathon 2024, designed to simplify event planning. 

It uses:

- **Frontend**: Next.js 14 with Auth.js (NextAuth.js) and Google SSO from Google Cloud
- **Backend**: Python Flask for Google Gemini API integration

## Getting Started

### Prerequisites

1. **Node.js**: Required for running the Next.js frontend. Download and install it from the [Node.js website](https://nodejs.org/). This will also install `npm` (Node Package Manager).

2. **Python**: Required for running the Flask backend. Ensure Python 3.x is installed. You can download it from the [Python website](https://www.python.org/).

### Frontend

1. **Google SSO Setup**:
   - You need to set up Google SSO in your Google Cloud Console. Follow the [Google Cloud documentation](https://cloud.google.com/identity-platform/docs/web/sign-in) for setup instructions.

2. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

### Backend

1. **Install Python Packages**:
   ```bash
   pip install Flask==2.2.2 google-api-core google-generativeai python-dotenv flask-cors
   ```

2. **Run the Flask App**:
   ```bash
   python app.py
   ```
   The app will be available at `http://localhost:8080`.
   
3. **Google Gemini Documentation**:
   - For details on integrating with Google Gemini, consult the [Google Gemini API documentation](https://developers.google.com/gemini).


## Versions

- **Python**: 3.12.2
- **Flask**: 2.2.2

---

**#buildwithgemini**

---
