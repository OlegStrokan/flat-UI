import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button} from '../Button/Button';
import {ETheme} from "../ETheme";
import {ESize} from "../ESize";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const White = Template.bind({});
White.args = {
    theme: ETheme.WHITE,
};

export const Dark = Template.bind({});
Dark.args = {
    theme: ETheme.DARK,
};

export const Small = Template.bind({});
Small.args = {
    size: ESize.SMALL
};

export const Medium = Template.bind({});
Medium.args = {
    size: ESize.MEDIUM,
};


export const Large = Template.bind({});
Large.args = {
    size: ESize.LARGE,
};

