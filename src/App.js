import Header from './components/header';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
const Post = lazy(() => import('./features/post/index'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/post'>
              <Post />
            </Route>
            <Redirect from='/' to='post' />
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>

  );
}

export default App;
