import { CSSProperties, ReactNode } from 'react';
import { spacing as spacingTokens } from '@angi/one-design-system/tokens/tokens';

type SpacingValue = keyof typeof spacingTokens;

type Direction = 'vertical' | 'horizontal';

type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type Align = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

interface StackProps {
  children: ReactNode;
  direction?: Direction;
  spacing?: SpacingValue;
  justify?: Justify;
  align?: Align;
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse';
  padding?: SpacingValue;
  paddingX?: SpacingValue;
  paddingY?: SpacingValue;
  margin?: SpacingValue;
  marginX?: SpacingValue;
  marginY?: SpacingValue;
  style?: CSSProperties;
  className?: string;
}

export const Stack = ({
  children,
  direction = 'vertical',
  spacing = '16',
  justify,
  align,
  wrap = false,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  style,
  className,
}: StackProps) => {
  const flexDirection = direction === 'vertical' ? 'column' : 'row';
  const gap = spacingTokens[spacing];

  // Convert boolean wrap to CSS value
  const flexWrap = wrap === true ? 'wrap' : wrap === false ? 'nowrap' : wrap;

  const stackStyle: CSSProperties = {
    display: 'flex',
    flexDirection,
    gap,
    justifyContent: justify,
    alignItems: align,
    flexWrap,
    padding: padding ? spacingTokens[padding] : undefined,
    paddingLeft: paddingX ? spacingTokens[paddingX] : undefined,
    paddingRight: paddingX ? spacingTokens[paddingX] : undefined,
    paddingTop: paddingY ? spacingTokens[paddingY] : undefined,
    paddingBottom: paddingY ? spacingTokens[paddingY] : undefined,
    margin: margin ? spacingTokens[margin] : undefined,
    marginLeft: marginX ? spacingTokens[marginX] : undefined,
    marginRight: marginX ? spacingTokens[marginX] : undefined,
    marginTop: marginY ? spacingTokens[marginY] : undefined,
    marginBottom: marginY ? spacingTokens[marginY] : undefined,
    ...style,
  };

  return (
    <div style={stackStyle} className={className}>
      {children}
    </div>
  );
};
