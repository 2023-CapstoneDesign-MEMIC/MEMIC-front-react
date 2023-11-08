import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import './styles';
import './scripts';
import IndexView from './views/IndexView';
import InputView from './views/InputView';
import RecordView from './views/RecordView';
import FeedbackView from './views/FeedbackView';
import FaqsView from './views/FaqsView';
import UnauthorizedView from './views/UnauthorizedView';
import NotFoundView from './views/NotFoundView';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexView />} />
            <Route path="/fileupload" element={<InputView />} />
            <Route path="/record" element={<RecordView />} />
            <Route path="/feedback" element={<FeedbackView />} />
            <Route path="/faqs" element={<FaqsView />} />
            <Route path="/401" element={<UnauthorizedView />} />
            <Route path="/404" element={<NotFoundView />} />
        </Routes>
    </BrowserRouter>
, document.getElementById('root'));
// serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
