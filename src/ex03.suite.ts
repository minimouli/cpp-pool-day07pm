/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 03', () => {

    test('Lock\'n load, baby', async () => {

        const sources = await Path.fromProject().glob('./ex03/*.cpp')

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex03/main.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./ex03').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Clip full',
            'Booooooom',
            'Firing all ammunition',
            'Booooooom',
            'Booooooom',
            'Booooooom',
            'Booooooom',
            'Fwoooosh',
            'Switching ammo to type: regular',
            'Switching ammo to type: plasma',
            'Reloading...',
            'Clip empty, please reload',
            'Reloading...',
            'Firing all ammunition',
            'Fwoooosh',
            'Fwoooosh',
            'Fwoooosh',
            'Fwoooosh',
            'Fwoooosh',
            ''
        ])
    })

})
