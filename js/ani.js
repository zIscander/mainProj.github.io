
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
        ['1', '5'],
      ],
      // Смещение вверх
      translateY: [
        ["1", "10000"],
        ['0', '800'],
      ]
    }
  }),
  // Анимация первого заголовка
  lax.addElements('.section-header', {
    scrollY: {
      // Увеличение
      opacity: [
        ["0", "300"],
        ['0', '1'],
      ],
      // Смещение Y
      translateY: [
        ["0", "100"],
        ['0', '0'],
      ],
      // Смещение X
      translateX: [
        ["0", "100"],
        ['0', '0'],
      ],
      // Смещение Z
      scale: [
        ["0", "300"],
        ['0', '1'],
      ]
    }
  })
}
