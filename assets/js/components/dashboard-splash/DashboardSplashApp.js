/**
 * DashboardSplashApp component.
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
 * Internal dependencies
 */
import '../publisher-wins';
import Data from 'googlesitekit-data';
import { STORE_NAME as CORE_SITE } from '../../googlesitekit/datastore/site/constants';
import SetupUsingProxy from '../setup/SetupUsingProxy';
import LegacyDashboardSplashApp from './LegacyDashboardSplashApp';
const { useSelect } = Data;

export default function DashboardSplashApp() {
	const usingProxy = useSelect( ( select ) => select( CORE_SITE ).isUsingProxy() );

	if ( usingProxy === true ) {
		return <SetupUsingProxy />;
	} else if ( usingProxy === false ) {
		return <LegacyDashboardSplashApp />;
	}

	return null;
}
