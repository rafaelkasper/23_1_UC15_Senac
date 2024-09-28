import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Progressive,
} from "rn-placeholder";

export const SkeletonCard = () => {
  return (
    <>
      <Placeholder Animation={Progressive} Left={PlaceholderMedia}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={50} />
        <PlaceholderLine />
        <PlaceholderLine width={80} />
        <PlaceholderLine />
      </Placeholder>
      <Placeholder
        style={{
          marginTop: 18,
        }}
        Animation={Progressive}
        Left={PlaceholderMedia}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={50} />
        <PlaceholderLine />
        <PlaceholderLine width={80} />
        <PlaceholderLine />
      </Placeholder>
    </>
  );
};
