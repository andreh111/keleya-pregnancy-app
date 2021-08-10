import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import KeleyaDot from '../Components/KeleyaDot';
import InitialContainer from '../Containers/InitialContainer';

interface InitialScreenProps {}

const InitialScreen: React.FC<InitialScreenProps> = () => {
  return (
    <>
      <Onboarding
        skipLabel={<></>}
        nextLabel={<></>}
        bottomBarColor="#fff"
        DotComponent={KeleyaDot}
        DoneButtonComponent={() => <></>}
        pages={[
          {
            backgroundColor: '#fff',
            image: <InitialContainer />,
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#fff',
            image: <InitialContainer />,
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#fff',
            image: <InitialContainer />,
            title: '',
            subtitle: '',
          },
        ]}
      />
    </>
  );
};

export default InitialScreen;
