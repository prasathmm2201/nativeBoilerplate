import React from 'react';
import Svg, {Path, Rect, G} from 'react-native-svg';

export const SearchIcon = ({color = '#436bef'}) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22">
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
          strokeWidth={1}
          opacity={0}>
          <Rect width={22} height={22} stroke="none" />
          <Rect x={0.5} y={0.5} width={21} height={21} fill="none" />
        </G>
        <Path
          id="icons8-search"
          d="M14.847,6a8.847,8.847,0,1,0,5.57,15.711L26.4,27.7A.915.915,0,1,0,27.7,26.4l-5.986-5.986A8.838,8.838,0,0,0,14.847,6Zm0,1.83a7.017,7.017,0,0,1,5.059,11.88.915.915,0,0,0-.2.2A7.017,7.017,0,1,1,14.847,7.83Z"
          transform="translate(8841 8855)"
          fill={color}
        />
      </G>
    </Svg>
  );
};
