// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { model } from './model.js';
import { panel } from './panel.js';
import { ModeloPieza } from './ModeloPieza.js';


panel.crearNuevaPieza()

panel.insertarPieza()

panel.pintaPanel()

panel.controlTeclas()

panel.iniciarMovimiento()