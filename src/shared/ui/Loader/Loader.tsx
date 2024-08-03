import { classNames } from 'shared/lib/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-grid', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
