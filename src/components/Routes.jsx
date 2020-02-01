import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Href from './Links';

import Home from '../pages/HomePage';
import Kopi from '../pages/kopi-print-og-tapeter';
import Etterlysende from '../pages/Etterlysende';
import Tunneler from '../pages/Tunneler';
import Taktil from '../pages/Taktil';
import Maritime from '../pages/Maritime';
import Kontakt from '../pages/Kontakt';

const Routes = () => (
    <Switch>
        <Route exact path={Href.Home} component={Home} />
        <Route exact path={Href.Kopi} component={Kopi} />
        <Route exact path={Href.Etterlysende} component={Etterlysende} />
        <Route exact path={Href.Tunneler} component={Tunneler} />
        <Route exact path={Href.Taktil} component={Taktil} />
        <Route exact path={Href.Maritime} component={Maritime} />
        <Route exact path={Href.Kontakt} component={Kontakt} />
    </Switch>
)

export default Routes;