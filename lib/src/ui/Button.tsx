import * as React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  TouchableOpacityProps
} from 'react-native'

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  /** Button text content */
  title: string
  /** Button variant/style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  /** Button size */
  size?: 'small' | 'medium' | 'large'
  /** Loading state */
  loading?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Full width button */
  fullWidth?: boolean
  /** Custom button container style */
  style?: ViewStyle | ViewStyle[]
  /** Custom text style */
  textStyle?: TextStyle | TextStyle[]
  /** Loading indicator color */
  loadingColor?: string
  /** Icon component to display before text */
  leftIcon?: React.ReactNode
  /** Icon component to display after text */
  rightIcon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
  loadingColor,
  leftIcon,
  rightIcon,
  onPress,
  ...rest
}) => {
  const isDisabled = disabled || loading

  const getButtonStyle = (): ViewStyle => {
    const baseStyle = [
      styles.button,
      styles[`${variant}Button`],
      styles[`${size}Button`],
      fullWidth && styles.fullWidth,
      isDisabled && styles.disabled,
      isDisabled && styles[`${variant}Disabled`]
    ]

    return StyleSheet.flatten([baseStyle, style])
  }

  const getTextStyle = (): TextStyle => {
    const baseTextStyle = [
      styles.text,
      styles[`${variant}Text`],
      styles[`${size}Text`],
      isDisabled && styles.disabledText,
      isDisabled && styles[`${variant}DisabledText`]
    ]

    return StyleSheet.flatten([baseTextStyle, textStyle])
  }

  const getLoadingColor = (): string => {
    if (loadingColor) return loadingColor

    switch (variant) {
      case 'primary':
      case 'danger':
        return '#ffffff'
      case 'secondary':
      case 'outline':
      case 'ghost':
      default:
        return '#007AFF'
    }
  }

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...rest}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={getLoadingColor()}
          style={styles.loader}
        />
      )}

      {!loading && leftIcon && <>{leftIcon}</>}

      <Text style={getTextStyle()}>{title}</Text>

      {!loading && rightIcon && <>{rightIcon}</>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    minHeight: 44,
    gap: 8
  },

  // Size variants
  smallButton: {
    paddingHorizontal: 12,
    minHeight: 36,
    borderRadius: 6
  },
  mediumButton: {
    paddingHorizontal: 16,
    minHeight: 44,
    borderRadius: 8
  },
  largeButton: {
    paddingHorizontal: 20,
    minHeight: 52,
    borderRadius: 10
  },

  // Button variants
  primaryButton: {
    backgroundColor: '#007AFF',
    borderWidth: 0
  },
  secondaryButton: {
    backgroundColor: '#F2F2F7',
    borderWidth: 0
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF'
  },
  ghostButton: {
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
    borderWidth: 0
  },

  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center'
  },

  // Text size variants
  smallText: {
    fontSize: 14
  },
  mediumText: {
    fontSize: 16
  },
  largeText: {
    fontSize: 18
  },

  // Text color variants
  primaryText: {
    color: '#ffffff'
  },
  secondaryText: {
    color: '#007AFF'
  },
  outlineText: {
    color: '#007AFF'
  },
  ghostText: {
    color: '#007AFF'
  },
  dangerText: {
    color: '#ffffff'
  },

  // Disabled states
  disabled: {
    opacity: 0.6
  },
  disabledText: {
    opacity: 0.6
  },

  // Disabled variants
  primaryDisabled: {
    backgroundColor: '#C7C7CC'
  },
  secondaryDisabled: {
    backgroundColor: '#E5E5EA'
  },
  outlineDisabled: {
    borderColor: '#C7C7CC'
  },
  ghostDisabled: {
    backgroundColor: 'transparent'
  },
  dangerDisabled: {
    backgroundColor: '#C7C7CC'
  },

  // Disabled text variants
  primaryDisabledText: {
    color: '#ffffff'
  },
  secondaryDisabledText: {
    color: '#C7C7CC'
  },
  outlineDisabledText: {
    color: '#C7C7CC'
  },
  ghostDisabledText: {
    color: '#C7C7CC'
  },
  dangerDisabledText: {
    color: '#ffffff'
  },

  // Full width
  fullWidth: {
    width: '100%'
  },

  // Loading
  loader: {
    marginRight: 8
  }
})

export default Button
