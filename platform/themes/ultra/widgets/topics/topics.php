<?php

use Botble\Widget\AbstractWidget;

class TopicsWidgets extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * @var string
     */
    protected $frontendTemplate = 'frontend';

    /**
     * @var string
     */
    protected $backendTemplate = 'backend';

    /**
     * @var string
     */
    protected $widgetDirectory = 'topics';

    /**
     * Widget constructor.
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function __construct()
    {
        parent::__construct([
            'name'           => 'Topics Posts',
            'description'    => __('Widget to display topic of posts'),
            'number_display' => 5,
            'name_custom_class' => '',
        ]);
    }
}
