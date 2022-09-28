import './categories.styles.scss';
import Directory from './components/directory/Directory';
import categories from './categories.json';

function App() {
  return <Directory categories={categories} />;
}

export default App;
