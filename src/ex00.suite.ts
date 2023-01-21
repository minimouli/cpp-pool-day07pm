/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 00', () => {

    test('MEEEEEEEDIC', async () => {

        const sources = await Path.fromProject().glob('./ex00/*.cpp')

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex00/main.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./ex00').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Soldier bob reporting 15 stimpaks remaining sir!',
            'Soldier Alice reporting 1 stimpaks remaining sir!',
            'Time to kick some ass and chew bubble gum.',
            'Mediiiiiic',
            'Hey boya, did you forget something?',
            'Keep the change.',
            'Soldier Alice reporting 3 stimpaks remaining sir!',
            'Don\'t be greedy',
            'Soldier bob reporting 12 stimpaks remaining sir!',
            ''
        ])
    })

})
