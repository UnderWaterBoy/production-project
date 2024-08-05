import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) =>
// const { theme, toggleTheme } = useTheme();

    (
        <Button>
            {/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */}
        </Button>
    );
export default ThemeSwitcher;
