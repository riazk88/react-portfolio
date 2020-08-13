import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {
    render() {
        return(
            <HashRouter>
                <div className="row Header" id="header">
                    <Navigation/>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/" render={()=>(<Redirect to="/about/"/>)} />
                        <Route path="/about" component={About}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/resume" component={Resume}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Header;