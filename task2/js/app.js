document.addEventListener('DOMContentLoaded', () => {
    let imageName = 'zombie-dead';
    const imagePath = '/icons';
    const extension = 'gif';
    const zombieParentSelector = document.querySelector('.zombies');
    const zombieSrc = `${imagePath}/${imageName}.${extension}`;

    for (let zombie of zombies) {
        const zombiePic = document.createElement('img');
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
        zombiePic.src = `${imagePath}/${imageName}.${extension}`;
        zombieParentSelector.appendChild(zombiePic);

        zombiePic.addEventListener('click', () => {
            zombiePic.src = zombieSrc;
            zombiePic.classList.add('dead');
        });
    }
});
