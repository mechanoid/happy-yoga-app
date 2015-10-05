module ApplicationHelper
  private

  def tag_with_defaults(options, defaults, &block)
    options.reverse_merge!(defaults)
    options = with_default_class(options)

    tag_with_options(options, &block)
  end

  def tag_with_options(options = { }, &block)
    defaults = {
      tag: 'div'
    }
    options.reverse_merge!(defaults)
    content_tag(options.delete(:tag), options, &block)
  end

  def with_default_class(options)
    options = options.dup
    classes = [options.delete(:default_class)] << options[:class] if options[:class] != ''
    options[:class] = classes
    options
  end
end
