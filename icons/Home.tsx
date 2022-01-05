import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Home = (props: any) => (
  <Svg width={props.size} height={props.size} {...props}>
    <G fill={props.color} fillRule="nonzero">
      <Path d="M3.588 23.297s-.024.59.553.59l6.652-.008.01-5.451s-.094-.898.777-.898h2.761c1.031 0 .968.898.968.898l-.012 5.434h6.512c.732 0 .699-.734.699-.734V13.076L13.33 4.913l-9.742 8.164v10.22Z" />
      <Path d="M0 12.317s.826 1.524 2.631 0l10.781-9.121 10.107 9.064c2.088 1.506 2.871 0 2.871 0L13.412.504 0 12.317ZM23.273 3.175h-2.599l.011 3.153 2.588 2.197z" />
    </G>
  </Svg>
);

export default Home;
