import { useState } from 'react';
import { Select, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, { floating }) => ({
  label: {
    position: 'absolute',
    zIndex: 2,
    top: 7,
    left: theme.spacing.sm,
    pointerEvents: 'none',
    color: floating ? theme.black : theme.colors.gray[5],
    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
    transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : 'none',
    fontSize: floating ? theme.fontSizes.sm : theme.fontSizes.md,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: 'opacity 150ms ease',
    opacity: floating ? 1 : 0,
  },

  input: {
    width: '100%',
    borderRadius: theme.radius.md,
  },
}));

export function FloatingLabelSelect(props) {
  const [focused, setFocused] = useState(false);
  const { classes } = useStyles({ floating: props.value?.trim().length !== 0 || focused });

  return (
    <div style={{ position: 'relative' }}>
      <Select
        id={props.id}
        data={props.data}
        placeholder={props.placeholder}
        label={props.label}
        rightSectionWidth={30}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        classNames={classes}
        size="md"
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        error={props.error}
        aria-label={props.label}
      />
    </div>
  );
}
