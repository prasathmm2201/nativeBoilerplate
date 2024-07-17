import React from 'react';
import Svg, {Path, Rect, G} from 'react-native-svg';

interface ActiveIconProps {
  color?: string;
}

export const ActiveIcon: React.FC<ActiveIconProps> = ({color}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <G
        id="Group_119262"
        data-name="Group 119262"
        transform="translate(-8847 -8861)">
        <G
          id="Rectangle_58674"
          data-name="Rectangle 58674"
          transform="translate(8847 8861)"
          fill="#fff"
          stroke="#707070"
          strokeWidth="1"
          opacity="0">
          <Rect width="24" height="24" stroke="none" />
          <Rect x="0.5" y="0.5" width="23" height="23" fill="none" />
        </G>
        <G id="Group_119696" data-name="Group 119696">
          <G
            id="Rectangle_58674-2"
            data-name="Rectangle 58674"
            transform="translate(8847 8861)"
            fill="#fff"
            stroke="#707070"
            strokeWidth="1"
            opacity="0">
            <Rect width="24" height="24" stroke="none" />
            <Rect x="0.5" y="0.5" width="23" height="23" fill="none" />
          </G>
          <Path
            id="icons8-work_3_"
            data-name="icons8-work (3)"
            d="M12.7,6a2.114,2.114,0,0,0-2.1,2.1V9.6H6.1A2.114,2.114,0,0,0,4,11.7V26.1a2.114,2.114,0,0,0,2.1,2.1H25.9A2.114,2.114,0,0,0,28,26.1V11.7a2.114,2.114,0,0,0-2.1-2.1H21.4V8.1A2.114,2.114,0,0,0,19.3,6Zm0,1.8h6.6a.287.287,0,0,1,.3.3V9.6H12.4V8.1A.287.287,0,0,1,12.7,7.8ZM6.1,11.4H25.9a.287.287,0,0,1,.3.3v8.1H17.8v-.3a.9.9,0,0,0-.9-.9H15.1a.9.9,0,0,0-.9.9v.3H5.8V11.7A.287.287,0,0,1,6.1,11.4ZM5.8,21.6h8.4v.3a.9.9,0,0,0,.9.9h1.8a.9.9,0,0,0,.9-.9v-.3h8.4v4.5a.287.287,0,0,1-.3.3H6.1a.287.287,0,0,1-.3-.3Z"
            transform="translate(8843 8855.9)"
            fill={color ?? '#a9afbc'}
          />
        </G>
      </G>
    </Svg>
  );
};
