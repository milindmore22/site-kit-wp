/**
 * PageSpeed Insights Module Component Stories.
 *
 * Site Kit by Google, Copyright 2020 Google LLC
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
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import DashboardPageSpeed from '../assets/js/modules/pagespeed-insights/components/DashboardPageSpeed';
import { STORE_NAME } from '../assets/js/modules/pagespeed-insights/datastore';
import { STORE_NAME as CORE_SITE } from '../assets/js/googlesitekit/datastore/site/constants';
import * as fixtures from '../assets/js/modules/pagespeed-insights/datastore/__fixtures__';
import { STRATEGY_MOBILE, STRATEGY_DESKTOP } from '../assets/js/modules/pagespeed-insights/datastore/constants';
import { WithTestRegistry } from '../tests/js/utils';

storiesOf( 'PageSpeed Insights Module/Components', module )
	.add( 'Dashboard widget', () => {
		const url = fixtures.pagespeedMobile.loadingExperience.id;
		const setupRegistry = ( { dispatch } ) => {
			dispatch( STORE_NAME ).receiveReport( fixtures.pagespeedMobile, { url, strategy: STRATEGY_MOBILE } );
			dispatch( STORE_NAME ).receiveReport( fixtures.pagespeedDesktop, { url, strategy: STRATEGY_DESKTOP } );
			dispatch( CORE_SITE ).receiveSiteInfo( { referenceSiteURL: url } );
		};
		return (
			<WithTestRegistry callback={ setupRegistry }>
				<DashboardPageSpeed />
			</WithTestRegistry>
		);
	} )
;
