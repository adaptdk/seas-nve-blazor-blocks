/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/gutenpride', {
	apiVersion: 2,
	attributes: {
		heading: {
			type: 'string',
			//source: 'text',
			//selector: 'h3',
			//default: '', // empty default
		},
		text: {
			type: 'string',
			//source: 'text',
			//selector: 'h3',
			//default: '', // empty default
		},
		component: {
			type: 'string',
		},
		customLoadingText: {
			type: 'boolean'
		},
		loading: {
			type: 'string',
			//source: 'text',
			//selector: 'div.b2c-component',
			//default: '', // empty default
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
