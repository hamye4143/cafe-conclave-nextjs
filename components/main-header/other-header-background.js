import classes from './other-header-background.module.css';

export default function OtherHeaderBackground() {
    return (
        <div className={classes['header-background']}>
            {/* 반투명 오버레이 */}
            <div className={classes.overlay}></div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop
                            offset="0%"
                            style={{ stopColor: '#f8f2e9', stopOpacity: 1 }}
                        />
                        <stop
                            offset="100%"
                            style={{ stopColor: '#e8d4c9', stopOpacity: 1 }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#gradient)"
                    d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7
             C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3
             C1248,117,1344,107,1392,101.3L1440,96L1440,0
             L1392,0C1344,0,1248,0,1152,0
             C1056,0,960,0,864,0C768,0,672,0,576,0
             C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </svg>
        </div>
    );
}
