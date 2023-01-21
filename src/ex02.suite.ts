/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 02', () => {

    test('Simple', async () => {

        const sources = await Path.fromProject().glob('./ex02/*.cpp')

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex02/simple.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./ex02').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'KreogCom 10 initialized',
            'does 10 have a mate ? false',
            'KreogCom 90 initialized',
            'does 10 have a mate after addCom ? true',
            'KreogCom 90 shutting down',
            'does 10 have a mate after removeCom ? false',
            'KreogCom 10 shutting down',
            ''
        ])
    })

    test('Medium', async () => {

        const sources = await Path.fromProject().glob('./ex02/*.cpp')

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex02/medium.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./ex02').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'KreogCom 10 initialized',
            'KreogCom 20 initialized',
            'KreogCom 30 initialized',
            'KreogCom 40 initialized',
            'KreogCom 40 currently at 4 4',
            'KreogCom 30 currently at 3 3',
            'KreogCom 20 currently at 2 2',
            'KreogCom 10 currently at 1 1',
            'direct call: KreogCom 10 currently at 1 1',
            'direct call: KreogCom 40 currently at 4 4',
            'KreogCom 20 shutting down',
            'KreogCom 40 currently at 4 4',
            'KreogCom 30 currently at 3 3',
            'KreogCom 10 currently at 1 1',
            'KreogCom 10 shutting down',
            ''
        ])
    })

    test('Hard', async () => {

        const sources = await Path.fromProject().glob('./ex02/*.cpp')

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex02/hard.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./ex02').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'KreogCom 10 initialized',
            'KreogCom 20 initialized',
            'KreogCom 30 initialized',
            'KreogCom 40 initialized',
            'KreogCom 20 shutting down',
            'KreogCom 40 currently at 4 4',
            'KreogCom 30 currently at 3 3',
            'KreogCom 10 currently at 1 1',
            'KreogCom 50 initialized',
            'KreogCom 50 shutting down',
            'KreogCom 40 shutting down',
            'KreogCom 30 shutting down',
            'KreogCom 10 currently at 1 1',
            'KreogCom 10 currently at 1 1',
            'KreogCom 10 shutting down',
            ''
        ])
    })

})
