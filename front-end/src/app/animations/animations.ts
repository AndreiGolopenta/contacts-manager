import {
    trigger,
    transition,
    style,
    animate,
    state,
    keyframes
} from '@angular/animations';

export const signInSignUp = trigger('signInSignUp', [
    state(
        'initial',
        style({
            left: '38rem'
        })
    ),
    state(
        'final',
        style({
            left: '4rem'
        })
    ),
    transition('initial => final', [
        animate(
            '400ms ease-in-out',
            keyframes([
                style({ left: '38rem' }),
                style({ left: '0rem' }),
                style({ left: '4rem' })
            ])
        )
    ]),
    transition('final => initial', [
        animate(
            '400ms ease-in-out',
            keyframes([
                style({ left: '4rem' }),
                style({ left: '42rem' }),
                style({ left: '38rem' })
            ])
        )
    ])
]);

export const scale = trigger('scale', [
    state(
      'initial',
      style({
        transform: 'scale(1)'
      })
    ),
    state(
      'final',
      style({
        transform: 'scale(0.8)'
      })
    ),
    transition('initial <=> final', [animate('150ms ease-in-out')])
  ]);
