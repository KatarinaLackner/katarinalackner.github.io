import { CSSProperties, ReactNode } from 'react';
import { breakpoints, spacing as spacingTokens } from '@angi/one-design-system/tokens/tokens';

type MaxWidth = keyof typeof breakpoints | 'none';
type SpacingValue = keyof typeof spacingTokens;

interface ContainerProps {
  children: ReactNode;
  maxWidth?: MaxWidth;
  centered?: boolean;
  padding?: SpacingValue;
  paddingX?: SpacingValue;
  paddingY?: SpacingValue;
  style?: CSSProperties;
  className?: string;
}

export const Container = ({
  children,
  maxWidth = 'lg',
  centered = true,
  padding,
  paddingX,
  paddingY,
  style,
  className,
}: ContainerProps) => {
  const containerStyle: CSSProperties = {
    maxWidth: maxWidth === 'none' ? 'none' : breakpoints[maxWidth],
    width: '100%',
    marginLeft: centered ? 'auto' : undefined,
    marginRight: centered ? 'auto' : undefined,
    // Apply padding shorthand first if provided
    ...(padding && { padding: spacingTokens[padding] }),
    // Then apply individual paddings (these will override the shorthand)
    paddingLeft: paddingX ? spacingTokens[paddingX] : undefined,
    paddingRight: paddingX ? spacingTokens[paddingX] : undefined,
    paddingTop: paddingY ? spacingTokens[paddingY] : undefined,
    paddingBottom: paddingY ? spacingTokens[paddingY] : undefined,
    ...style,
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};
