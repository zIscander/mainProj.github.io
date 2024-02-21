window.onload = function () {

  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

    // Анимация фона
    lax.addElements('.bg', {
    scrollY: {
      // Увеличение
      scale: [
        ["1", "10000"],
        ['1', '1.5'],
      ],
      // Смещение вверх
      translateY: [
        ["1", "10000"],
        ['0', '100'],
      ],
      // Смещение вправо 
      translateX: [
        ["1", "10000"],
        ['0', '-150'],
      ]
    }
    }),

    // Анимация активного фона
    lax.addElements('.bg-active', {
      scrollY: {
        // Увеличение
        scale: [
          ["1", "10000"],
          ['1', '2'],
        ],
        // Смещение вверх
        translateY: [
          ["1", "10000"],
          ['0', '0'],
        ]
      }
    }),

    // Анимация первого заголовка
    lax.addElements('.main__body', {
      scrollY: {
        // Увеличение
        opacity: [
          ["0", "300", "600"],
          ['0', '1', '0'],
        ],
        // Смещение Z
        scale: [
          ["0", "300", "600"],
          ['0', '1', '5'],
        ]
      }
    })
}
