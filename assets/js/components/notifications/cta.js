/**
 * CTA component.
 *
 * Site Kit by Google, Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Link from '../link';

class CTA extends Component {
	render() {
		const {
			title,
			description,
			ctaLink,
			ctaLabel,
			error,
			onClick,
		} = this.props;

		return (
			<div
				className={ classnames(
					'googlesitekit-cta',
					{ 'googlesitekit-cta--error': error }
				) }
			>
				{ title &&
					<h3 className="googlesitekit-cta__title">
						{ title }
					</h3>
				}
				{ ( description && typeof description === 'string' ) && (
					<p className="googlesitekit-cta__description">{ description }</p>
				) }
				{ ( description && typeof description !== 'string' ) && (
					<div className="googlesitekit-cta__description">{ description }</div>
				) }
				{ ctaLabel &&
					<Link
						href={ ctaLink }
						onClick={ onClick }
						inverse={ ! error }
						caps
						arrow
					>
						{ ctaLabel }
					</Link>
				}
			</div>
		);
	}
}

CTA.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
	ctaLink: PropTypes.string,
	ctaLabel: PropTypes.string,
	error: PropTypes.bool,
	onClick: PropTypes.func,
};

CTA.defaultProps = {
	title: '',
	description: '',
	ctaLink: '',
	ctaLabel: '',
	error: false,
	onClick: () => {},
};

export default CTA;
