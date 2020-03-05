document.addEventListener('DOMContentLoaded', () => {
    let imageName = 'zombie-dead';
    const zombieParentSelector = document.querySelector('.zombies');

    for (let zombie of zombies) {
        const zombiePic = document.createElement('div');

        switch (zombie.type) {
            case ZOMBIE_TYPE.SMALL:
                imageName = 'zombie-small';
                break;
            case ZOMBIE_TYPE.MAD:
                imageName = 'zombie-mad';
                break;
            case ZOMBIE_TYPE.STRONG:
                imageName = 'zombie-strong';
                break;
            default:
                break;
        }

        zombiePic.classList.add(imageName);
        zombieParentSelector.appendChild(zombiePic);

        zombiePic.addEventListener('click', () => {
            zombiePic.classList.add('dead');
        });
    }
});
