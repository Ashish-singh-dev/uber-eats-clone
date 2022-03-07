import SkeletonContent from "react-native-skeleton-content";
import React from "react";

const Skeleton = (props: { isLoading: boolean }) => {
  return (
    <SkeletonContent
      containerStyle={{ flex: 1, width: "100%" }}
      isLoading={props.isLoading}
      layout={[
        {
          key: "imagePoster",
          width: "100%",
          height: 180,
          marginBottom: 6,
        },
        {
          key: "textLine",
          width: "70%",
          height: 15,
          marginBottom: 5,
        },
        {
          key: "subLine",
          width: "50%",
          height: 15,
          marginBottom: 5,
        },
      ]}
    ></SkeletonContent>
  );
};

export default Skeleton;
