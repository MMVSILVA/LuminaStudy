/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import DashboardLayout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Summarize from './pages/Summarize';
import Flashcards from './pages/Flashcards';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="summarize" element={<Summarize />} />
          <Route path="flashcards" element={<Flashcards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
