import "./global.css";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Typewriter from 'typewriter-effect/dist/core';


const app = HMR(App, { target: document.body }, "routify-app");

export default app;
