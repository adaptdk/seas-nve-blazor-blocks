/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

import { Placeholder, TextControl, SelectControl, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, isSelected }) {
	return (
		<div {...useBlockProps()}>
			<Placeholder
				label={__('Self-service component', 'seas-blazor-blocks')}
				isColumnLayout={true}
			>
				<SelectControl
					label={__('Select component', 'seas-blazor-blocks')}
					value={attributes.component}
					options={[
						{ label: 'Address Selector', value: 'addressSelector' },
						{ label: 'Billing', value: 'billing' },
						{ label: 'Consumption', value: 'consumption' },
					]}
					onChange={(newComponent) => setAttributes({ component: newComponent })}
				/>

				<TextControl
					label={__('Heading', 'seas-blazor-blocks')}
					value={attributes.heading}
					onChange={(val) => setAttributes({ heading: val })}
				/>

				<TextControl
					label={__('Text', 'seas-blazor-blocks')}
					value={attributes.text}
					onChange={(val) => setAttributes({ text: val })}
				/>

				<ToggleControl
					label={__('Custom loading text', 'seas-blazor-blocks')}
					checked={attributes.hasCustomLoadingText}
					onChange={(val) => setAttributes({ hasCustomLoadingText: val})}
				/>

				{attributes.hasCustomLoadingText ? (
					<TextControl
						label={__('Loading text', 'seas-blazor-blocks')}
						value={attributes.customLoadingText}
						onChange={(val) => setAttributes({ customLoadingText: val })}
					/>
				) : null}
			</Placeholder>
		</div>
	);
}
