import { AppRoot, Panel, PanelHeader, View } from '@vkontakte/vkui';
import Section from './section/Section';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './navigation/navigation';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  const NEWS_URL = 'https://tvzvezda.ru/api/v1/video/news/?page=1&size=6';
  const PROGRAMS_URL = 'https://tvzvezda.ru/api/v1/video/programs/?page=1&size=6';

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <AppRoot>
      <View activePanel={'main'}>
        <Panel id={'main'}>
          <PanelHeader>Телеканал звезда</PanelHeader>
          <Navigation />
          <Routes>
            <Route
              path={'/'}
              element={<Section url={NEWS_URL} headerTitle={'Последние новости'} />}
            />
            <Route
              path={'/programs'}
              element={
                <Section url={PROGRAMS_URL} headerTitle={'Последние выпуски передач'} />
              }
            />
          </Routes>
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App;
