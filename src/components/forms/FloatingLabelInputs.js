import { useState } from 'react';
import { Textarea, createStyles, TextInput, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const useStyles = createStyles((theme, { floating }) => ({
    root: {
        position: 'relative',
    },

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
        // borderRadius: theme.radius.md,

        '&::placeholder': {
            transition: 'color 150ms ease',
            color: !floating ? 'transparent' : undefined,
        },
    },
}));

export function FloatingLabelInput(props) {
    const [focused, setFocused] = useState(false);
    const { classes } = useStyles({ floating: props.value?.trim().length !== 0 || focused });

    return (
        <TextInput
            id={props.id}
            type={props.type ?? 'text'}
            label={props.label}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
            size={props.size}
            radius={props.radius}
            classNames={classes.input}
            w={props.width}
            value={props.value}
            onChange={props.onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt={props.mt}
            autoComplete="none"
            error={props.error}
            aria-label={props.label}
        />
    );
}

export function FloatingLabelTextarea(props) {
    const [focused, setFocused] = useState(false);
    const { classes } = useStyles({ floating: props.value?.trim().length !== 0 || focused });

    return (
        <Textarea
            id={props.id}
            label={props.label}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
            size={props.size}
            radius={props.radius}
            classNames={classes.input}
            w={props.width}
            value={props.value}
            onChange={props.onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt={props.mt}
            minRows={props.minRows}
            maxRows={props.maxRows}
            error={props.error}
            aria-label={props.label}
        />
    );
}

export function FloatingLabelSelect(props) {
    const [focused, setFocused] = useState(false);
    const { classes } = useStyles({ floating: props.value?.trim().length !== 0 || focused });

    return (
        <Select
            id={props.id}
            data={props.data}
            name={props.name}
            placeholder={props.placeholder}
            label={props.label}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={35}
            radius={props.radius}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            classNames={classes}
            size={props.size}
            w={props.width}
            mt={props.mt}
            required={props.required}
            value={props.value}
            onChange={props.onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            error={props.error}
            aria-label={props.label}
            withinPortal
            {...(
                props.searchable 
                ? (
                    props.id === 'selectedDistrict'
                    ? { searchable: true, nothingFound: "No districts found" }
                    : { searchable: true, nothingFound: "No location found. Click the green button" }
                )
                : {}
            )}

        />
    );
}