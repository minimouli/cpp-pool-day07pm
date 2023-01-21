/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 01', () => {

    test('KOALABOT', async () => {

        const sources = await Path.fromProject().glob('./ex01/*.cpp')

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex01/main.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./ex01').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        /* eslint-disable no-tabs */
        await expect(exec).toOutput([
            '[KoalaBot] Bob the bot',
            '	[Parts] Arms A-02 status : OK',
            '	[Parts] Legs L-01 status : OK',
            '	[Parts] Head H-02 status : OK',
            'Is Bob okay? true',
            '[KoalaBot] Sofia the bot',
            '	[Parts] Arms A-03 status : KO',
            '	[Parts] Legs L-02 status : OK',
            '	[Parts] Head H-01 status : OK',
            'Is Sofia okay? false',
            '[KoalaBot] Ali the bot',
            '	[Parts] Arms A-01 status : OK',
            '	[Parts] Legs L-03 status : KO',
            '	[Parts] Head H-03 status : KO',
            'Is Ali okay? false',
            'swapping...',
            '[KoalaBot] Bob the bot',
            '	[Parts] Arms A-03 status : KO',
            '	[Parts] Legs L-01 status : OK',
            '	[Parts] Head H-03 status : KO',
            'Is Bob okay? false',
            '[KoalaBot] Sofia the bot',
            '	[Parts] Arms A-02 status : OK',
            '	[Parts] Legs L-03 status : KO',
            '	[Parts] Head H-01 status : OK',
            'Is Sofia okay? false',
            '[KoalaBot] Ali the bot',
            '	[Parts] Arms A-01 status : OK',
            '	[Parts] Legs L-02 status : OK',
            '	[Parts] Head H-02 status : OK',
            'Is Ali okay? true',
            ''
        ])
        /* eslint-enable no-tabs */
    })

})
