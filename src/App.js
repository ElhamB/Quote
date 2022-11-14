import{Route,Switch,Redirect} from 'react-router-dom';
import AllQuote from './Pages/AllQuote';
import NewQuote from './Pages/NewQuote';
import QuoteDetails from './Pages/QuoteDetails';
import Layout from './components/layout/Layout';
import NotFound from './Pages/NotFound';
function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
      <Redirect to="/quotes"/>
      </Route>
    <Route path="/new-quote"><NewQuote/></Route>
    <Route path="/quotes" exact><AllQuote/></Route>
    <Route path="/quotes/:quoteId"><QuoteDetails/></Route>
    <Route path="*"><NotFound/></Route>
    </Switch>
    </Layout>
  );
}

export default App;
