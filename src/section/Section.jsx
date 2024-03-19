import { CardGrid, Group, Header, SplitCol, SplitLayout } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import NewsCard from '../news-card/NewsCard';
import bridge from '@vkontakte/vk-bridge';

const Section = ({ url, headerTitle }) => {
  const [cards, setCards] = useState([]);
  const [sizeFlag, setSizeFlag] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCards(res);

        bridge
          .send('VKWebAppShowCommunityWidgetPreviewBox', {
            group_id: 186453108,
            type: 'text',
            code: `return {
     "title": "Рестораны",
    
};`,
          })
          .then((data) => {
            if (data.result) {
              // Экран предпросмотра показан
            }
          })
          .catch((error) => {
            // Ошибка
            console.log(error);
          });
      });

    if (window.innerWidth < 640) {
      setSizeFlag(true);
    }
  }, [url]);

  return (
    <SplitLayout>
      <SplitCol autoSpaced>
        <Group mode={'card'} header={<Header mode={'secondary'}>{headerTitle}</Header>}>
          <CardGrid size={!sizeFlag ? 's' : 'l'}>
            {cards.map((item, index) => {
              const flag = headerTitle === 'Последние выпуски передач';

              return (
                <NewsCard
                  key={index}
                  title={flag ? item.parentTitle : item.title}
                  img={item.media.images.i16x9}
                  url={item.urlOrigin}
                  subtitle={flag && item.title}
                />
              );
            })}
          </CardGrid>
        </Group>
      </SplitCol>
    </SplitLayout>
  );
};

export default Section;
