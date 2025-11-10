import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ArticleTransition from './pages/ArticleTransition';
import SubmitTransition from './pages/SubmitTransition';
import ArticleSelection from './pages/ArticleSelection';
import ArticleView from './pages/ArticleView';
import MyMatches from './pages/MyMatches';
import ConversationDetail from './pages/ConversationDetail';
import Navigation from './components/Navigation';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hideNavigation = location.pathname === '/article-transition' || location.pathname === '/submit-transition';

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article-transition" element={<ArticleTransition />} />
        <Route path="/submit-transition" element={<SubmitTransition />} />
        <Route path="/article-selection" element={<ArticleSelection />} />
        <Route path="/article-view/:id" element={<ArticleView />} />
        <Route path="/my-matches" element={<MyMatches />} />
        <Route path="/conversation-detail/:matchType/:name" element={<ConversationDetail />} />
      </Routes>
      {!hideNavigation && <Navigation />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

