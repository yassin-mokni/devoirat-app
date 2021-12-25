import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from 'src/routes';
import Auth from 'src/layouts/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Auth>
        <RenderRoutes />
      </Auth>
    </BrowserRouter>
  );
};

export default App;
