import './base.css';
import './sky.css';
import './style.css';
import { mount } from './apps/sky/app';

const root = document.getElementById('app');
if (root) mount(root);
